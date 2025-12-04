import { Badge } from "@modules/common/components/badge"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Attention:</span> For testing purposes
      only.
    </Badge>
  )
}

export default PaymentTest
