namespace DefaultNamespace;

public class ExtractClassRefactored
{
    public class OrderSummary
    {
        public decimal TotalCost { get; set; }
        public decimal Discount { get; set; }
        public decimal FinalCost { get; set; }
    }

    public class Order
    {
        public OrderSummary Summary { get; set; }
        //...
    }
}