interface UseFetchProps {
  method: "GET" | "POST" | "DELETE" | "PATCH";
  data?: unknown;
}
export async function useFetch({ method, data }: UseFetchProps) {
  const url = new URL("http://localhost:3333/transactions");

  switch (method) {
    case "GET": {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    case "POST": {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const newTransaction = await response.json();
      return newTransaction;
    }
  }
}
