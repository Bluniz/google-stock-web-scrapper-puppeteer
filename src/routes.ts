import express, { Request, Response } from "express";
import { scrapData } from "./puppeteer";

const routes = express.Router();

routes.get("/stock/:stockName", async (req: Request, res: Response) => {
  const { stockName } = req.params;

  try {
    const scrappedValue: any = await scrapData(stockName);

    let name = "";
    let type = "";

    if (scrappedValue.name.includes("Units")) {
      type = "Units";
      name = scrappedValue.name;
    } else if (scrappedValue.name.includes("FII")) {
      type = "FII";
    } else {
      const stockNumber = Number(stockName.replace(/([^\d])+/gim, ""));

      enum stockNumberList {
        "Ação Ordinária" = 3,
        "Ação Preferêncial" = 4,
      }

      type = stockNumberList[stockNumber] ?? "Ação";
    }

    return res.status(200).json({
      name: stockName,
      value: scrappedValue.value,
      type,
    });
  } catch (err) {
    console.warn(err);
    return res.status(400).json({ msg: err });
  }
});

export default routes;
