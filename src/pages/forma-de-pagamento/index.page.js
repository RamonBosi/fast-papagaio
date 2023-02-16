import { MyNavBar } from "@/components/MyNavBar";
import { TagMain } from "@/components/TagMain";
import { PaymentOptions } from "./components/PaymentOptions";

export default function PaymentMethods() {

  return (
    <>
      <MyNavBar />
      <TagMain>
        <h1 className="align-self-center mb-3">Forma de pagamento</h1>
        <PaymentOptions/>
      </TagMain>
    </>
  )
}