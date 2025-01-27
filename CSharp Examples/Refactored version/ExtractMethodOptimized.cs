namespace DefaultNamespace;

public class ExtractMethodRefactored
{
    public void ProcessOrder(Order order)
    {
        decimal totalCost = CalculateTotalCost(order);
        decimal discount = CalculateDiscount(totalCost);
        decimal finalCost = totalCost - discount;
        _orderRepository.SaveOrder(order, finalCost);
    }

    private decimal CalculateTotalCost(Order order)
    {
        return order.Items.Sum(i => i.Price * i.Quantity);
    }

    private decimal CalculateDiscount(decimal totalCost)
    {
        return totalCost * 0.1m;
    }
}