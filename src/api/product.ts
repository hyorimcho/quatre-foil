import { AxiosError } from "axios";
import { client, client } from "./core/api";

// 제품 구매
export const purchase = async (productId: string, accountId: string) => {
  return client("/products/buy", {
    method: "POST",
    data: {
      productId,
      accountId,
    },
  });
};

// 제품 구매 확정
export const cfmPurchase = async (detailId: string) => {
  return client("/products/ok", {
    method: "POST",
    data: {
      detailId,
    },
  });
};

// 제품 구매 취소
export const cancelPurchase = async (detailId: string) => {
  return client("/products/cancel", {
    method: "POST",
    data: {
      detailId,
    },
  });
};

interface Product {
  // 제품 정보
  id: string; // 제품 ID
  title: string; // 제품 이름
  price: number; // 제품 가격
  description: string; // 제품 설명(최대 100자)
  tags: string[]; // 제품 태그
  thumbnail: string; // 제품 썸네일 이미지(URL)
  isSoldOut: boolean; // 제품 매진 여부
}
export const getAllProducts = async () => {
  const { data } = await client<Product[]>({
    url: "products",
    headers: {
      masterKey: true,
    },
  });

  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await client.get<Product>(`/products/${id}`);

  return data;
};
