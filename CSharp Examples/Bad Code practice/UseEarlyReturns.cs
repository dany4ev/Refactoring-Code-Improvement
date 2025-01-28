namespace DefaultNamespace;

public class UseEarlyReturns
{
    public bool IsValid(Order order)
    {
        if (order == null)
        {
            return false;
        }
        if (order.Items == null)
        {
            return false;
        }
        if (order.Items.Count == 0)
        {
            return false;
        }
        return true;
    }
}