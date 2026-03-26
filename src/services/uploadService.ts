let hasFailedOnce = false;

export const resetUpload = () => {
  hasFailedOnce = false;
};

export const uploadImage = async (image: string): Promise<number> => {
  if (!image) {
    throw new Error("Imagem inválida");
  }

  await new Promise((r) => setTimeout(r, 1500));

  if (!hasFailedOnce) {
    hasFailedOnce = true;
    throw new Error("Falha simulada na primeira tentativa");
  }

  return Math.floor(Math.random() * 100);
};
