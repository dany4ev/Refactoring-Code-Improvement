namespace DefaultNamespace;

public class RemoveDuplicateCode
{
    public void SaveOrder(Order order)
    {
        _orderRepository.SaveOrder(order);
        _logger.LogInformation("Order saved");
    }

    public void UpdateOrder(Order order)
    {
        _orderRepository.UpdateOrder(order);
        _logger.LogInformation("Order updated");
    }
}