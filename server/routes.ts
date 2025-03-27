import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for form submissions
  app.post("/api/leads", async (req: Request, res: Response) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      
      // Add timestamp
      const leadWithTimestamp = {
        ...leadData,
        createdAt: new Date().toISOString()
      };

      const newLead = await storage.createLead(leadWithTimestamp);
      res.status(201).json({ success: true, lead: newLead });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Lead submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit lead information" 
        });
      }
    }
  });

  // API route to get featured cars (just for demonstration)
  app.get("/api/featured-cars", (_req: Request, res: Response) => {
    try {
      const featuredCars = [
        {
          id: 1,
          make: "BYD",
          model: "SEALION 7",
          details: "230KW COMFORT 83KWH SDR AUTOMATIC",
          image: "https://images.unsplash.com/photo-1619767886558-6f4de79ae269",
          price: 378,
          term: 36,
          upfront: 6,
          mileage: 8000
        },
        {
          id: 2,
          make: "TESLA",
          model: "MODEL Y",
          details: "LONG RANGE AWD 82KWH AUTO",
          image: "https://images.unsplash.com/photo-1619767886558-6f4de79ae269",
          price: 429,
          term: 48,
          upfront: 9,
          mileage: 8000
        }
      ];
      
      res.json({ success: true, cars: featuredCars });
    } catch (error) {
      console.error("Error fetching featured cars:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch featured cars" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
