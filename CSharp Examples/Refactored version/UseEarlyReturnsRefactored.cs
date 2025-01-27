namespace DefaultNamespace;

public class UseEarlyReturnsRefactored
{
    public bool IsValid(Order order)
    {
        if (order == null || order.Items == null || order.Items.Count == 0)
        {
            return false;
        }
        return true;
    }
}