import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  console.log(request.body)

  return new Response(
    JSON.stringify({
      message: "¡Esto es un GET!",
    })
  );
};

export const POST: APIRoute = ({ request }) => {
  return new Response(request.body);
};
