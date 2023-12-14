import axios from "axios";
import Papa from "papaparse";

const baseURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSj7NgzfQkCCPBycnTSNzaM9z65Y5fSMgPXNC93MBTTe-K0E9y3YBIcjkm8lBYU1oFwYZZ1QzXK-K42/pub?gid=0&single=true&output=csv";

export async function getProducts() {
  const response = await axios.get(baseURL, {
    responseType: "blob",
    cache: "no-store",
  });

  const products = await new Promise((resolve, reject) => {
    Papa.parse(response.data, {
      header: true,
      complete: (results) => {
        const products = results.data;
        resolve(products.filter((product) => product.titulo != ""));
      },
      error: (error) => {
        reject(error.message);
      },
    });
  });

  /* products.forEach((product) => {
    product.precio = parseFloat(product.precio);
    product.slug = product.titulo
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .concat(`-${product.estado}`)
      .concat(`-${product.precio}`)
      .toLowerCase();
  }); */

  return products;
}
