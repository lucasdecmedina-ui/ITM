# Mídias do site

Todos os arquivos de mídia ficam **dentro do projeto**, para permitir alterações
diretas pelo GitHub. Nada é hospedado externamente.

```
public/assets/
  img/     imagens (hero, cursos, galeria, eventos)
  video/   vídeos institucionais
```

## Vídeo institucional (seção "Sobre o ITM")

Coloque o arquivo em:

```
public/assets/video/institucional.mp4
```

Requisitos do arquivo:

- formato **vertical 9:16** (gravado no celular)
- exibido em retrato, com autoplay + muted + loop e sem controles
- enquanto o arquivo não existir, o poster `img/sobre-poster.jpg` é exibido

Para trocar o vídeo, basta substituir o arquivo com o mesmo nome.
Para trocar qualquer imagem, substitua o arquivo correspondente em `img/`
mantendo o nome — nenhum código precisa ser alterado.

Textos, cursos, horários e links ficam em `src/components/itm/data.ts`.
