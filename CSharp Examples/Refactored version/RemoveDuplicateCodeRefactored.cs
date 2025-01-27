namespace DefaultNamespace;

public class RemoveDuplicateCodeRefactored
{
    public void SaveOrder(Order order)
    {
        _orderRepository.SaveOrder(order);
        LogOrderSaved();
    }

    public void UpdateOrder(Order order)
    {
        _orderRepository.UpdateOrder(order);
        LogOrderUpdated();
    }

    private void LogOrderSaved()
    {
        _logger.LogInformation("Order saved");
    }

    private void LogOrderUpdated()
    {
        _logger.LogInformation("Order updated");
    }
}