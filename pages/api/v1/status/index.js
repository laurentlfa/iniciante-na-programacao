function status(request, response) {
  response
    .status(200)
    .json({ chave: "Nois Auto Freios a melhor oficina do Brasil" });
}

export default status;
