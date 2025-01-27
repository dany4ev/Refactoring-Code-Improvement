namespace DefaultNamespace;

public class ExtractMethod
{
    public void ProcessOrder(Order order)
    {
        // Calculate total cost
        decimal totalCost = order.Items.Sum(i => i.Price * i.Quantity);
        // Apply discount
        decimal discount = totalCost * 0.1m;
        decimal finalCost = totalCost - discount;
        // Save order
        _orderRepository.SaveOrder(order, finalCost);
    }
}