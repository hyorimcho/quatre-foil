import ProductNotice from "@components/ProductNotice";
import { tablet } from "@global/responsive";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "api/product";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { addToCart } from "features/cartSlice";
import { purchaseAction } from "features/purchaseSlice";
import useGetProductQuery from "lib/hooks/useGetProductQuery";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams() as { productId: string };
  const navigate = useNavigate();
  const { purchase } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { product, isLoading } = useGetProductQuery(productId);
  const onIncrement = () => {
    if (quantity < 5) setQuantity((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleClickCart = () => {
    dispatch(
      addToCart({
        id,
        price,
        quantity,
        thumbnail,
        title,
      }),
    );
  };

  const handleClickPurchase = () => {
    dispatch(
      purchaseAction({
        id,
        price,
        quantity,
        thumbnail,
        title,
      }),
    );

    navigate(`/purchase/${purchase.id}`);
  };

  console.log(product);

  // useEffect(() => {
  //   if (purchase.id === productId) navigate(`/purchase/${purchase.id}`);
  // }, [navigate, purchase.id, productId]);

  if (isLoading) return <div>loading...</div>;
  const { id, title, price, description, thumbnail, tags, photo, isSoldOut } =
    product!;

  // isSoldOut 일시 처리

  return (
    <Section>
      <ItemWrapper>
        <ImgWrapper>
          <img src={thumbnail} alt={title} />
        </ImgWrapper>
        <ItemDescription>
          <h4>{title}</h4>
          <p>{price.toLocaleString()} 원</p>
          <div>
            <p>수량 - 1인당 구매 수량 5개 </p>
            <BtnWrapper>
              <button
                type="button"
                onClick={onDecrement}
                disabled={quantity === 1}
              >
                -
              </button>
              <p>{quantity}</p>
              <button type="button" onClick={onIncrement}>
                +
              </button>
            </BtnWrapper>
          </div>
          <PriceWrapper>
            <Text>
              <div>주문 수량</div>
              <div>{quantity}개</div>
            </Text>
            <Text>
              <div>총 상품 금액</div>
              <div>{(price * quantity).toLocaleString()} 원</div>
            </Text>
          </PriceWrapper>

          <BuyBtnWrapper>
            <Button
              type="button"
              primary="primary"
              disabled={isSoldOut}
              onClick={handleClickPurchase}
            >
              {isSoldOut ? "품절" : "구매하기"}
            </Button>
            <Button
              type="button"
              disabled={isSoldOut}
              onClick={handleClickCart}
            >
              장바구니에 담기
            </Button>
          </BuyBtnWrapper>
        </ItemDescription>
      </ItemWrapper>

      <DescWrapper>
        <h4>상세설명</h4>
        <div className="desc">{description}</div>
        <div>
          <img src={photo} alt={title} />
        </div>

        <ProductNotice />
      </DescWrapper>
    </Section>
  );
};
export default Detail;

const Section = styled.section`
  padding: 3.25rem 1rem;

  ${tablet({
    maxWidth: 1024,
    marginInline: "auto",
  })}
`;

const ItemWrapper = styled.div`
  ${tablet({
    display: "flex",
    gap: "1rem",
  })}
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${tablet({
    flex: 0.5,
  })}
  div {
    width: 100%;
  }
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid;
  ${tablet({
    flex: 0.5,
    justifyContent: "center",
    borderBottom: "none",
  })}

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
  }
`;

const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid;
  margin-top: 0.5rem;
  button {
    padding: 0.5rem;
    width: 37px;
    height: 37px;

    &:disabled {
      cursor: not-allowed;
    }
  }
  p {
    padding: 0.5rem;
    width: 37px;
    height: 37px;
    text-align: center;
    border-right: 1px solid;
    border-left: 1px solid;
  }
`;

const PriceWrapper = styled.div`
  /* display: flex; */
  padding-top: 1.5rem;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const BuyBtnWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1.5rem;
`;

const Button = styled.button<{ primary?: string }>`
  flex: 1;
  background-color: ${({ primary }) =>
    primary ? "var(--primary-color)" : "var(--white)"};
  color: ${({ primary }) =>
    primary ? "var(--white)" : "var(--primary-color)"};
  font-weight: 600;
  padding: 1rem;
  border: ${({ primary }) => (primary ? "none" : "1px solid")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ primary }) =>
      primary ? "" : "var(--primary-color)"};
    color: ${({ primary }) => (primary ? "" : "var(--white)")};
  }
`;

const DescWrapper = styled.div`
  margin-top: 4rem;

  h4 {
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid;
    margin-bottom: 1.25rem;
  }

  .desc {
    margin: 1.5rem 0 3rem 0;
    word-break: keep-all;
  }

  .desc-footer {
    font-size: 14px;
    word-break: keep-all;
  }
`;
