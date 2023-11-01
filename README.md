# Docker

Projeto criado com a finalidade de apresentar os resultados dos desafios propostos na conclusão do módulo Docker do curso Full Cycle 3.0

## Desafio Go:

Imagem do container Go no Doker Hub: \
https://hub.docker.com/r/tarsodecastro/fullcycle


```
# Teste
docker run --rm tarsodecastro/fullcycle

# Retorno esperado
Full Cycle Rocks!

```

## Desafio Nginx + Node + MySQL:

### Instalação

```
# Clone o repositório
git clone https://github.com/tarsodecastro/fullcycle-docker.git

# Acesse a pasta do projeto
cd fullcycle-docker

# Rode o docker-compose.yaml
docker-compose up

# Acesse a aplicação pelo navegador na porta 8080
localhost:8080
```