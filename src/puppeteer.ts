import puppeteer from "puppeteer";

export const scrapData = async (searchTerm: string = "") => {
  return new Promise(async (resolve, reject) => {
    try {
      //! Abre o navegador
      const browser = await puppeteer.launch({
        slowMo: 300,
      });
      //! Abre uma nova página no navegador
      const page = await browser.newPage();
      //! Redireciona a página especifica na nova aba
      await page.goto(`https://www.google.com.br/search?q=${searchTerm}`);
      //! Executa alguma ação dentro do navegador
      const result = await page.evaluate(() => {
        const stockValue = document.querySelector<HTMLElement>(
          'span[jsname="vWLAgc"]'
        )?.innerText;
        const stockName = document.querySelector<HTMLElement>(
          "div[role='heading'] > div > div"
        )?.innerText;

        return (
          stockValue && stockName && { value: stockValue, name: stockName }
        );
      });
      //! Caso ocorra algum erro na página é possivel verificar
      page.on("error", (msg) => {
        console.error(msg);
        reject("Error");
      });

      //! Fecha o browser
      await browser.close();

      result ? resolve(result) : reject("Not found");
    } catch (error) {
      console.error(error);
      reject("Error");
    }
  });
};
