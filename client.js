import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "5vzb8hpm",
  dataset: "brown-chamois",
  apiVersion: "2023-04-03", // consulte a documentação do Sanity para obter a versão API mais recente
  useCdn: true, // Defina como `true` para melhorar o desempenho de leitura, mas pode demorar para propagar mudanças.
});

export default client;
