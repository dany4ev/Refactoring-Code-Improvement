namespace DefaultNamespace;

public class UseNull_ConditionalOperator
{
    public bool IsValid(Order order)
    {
        if (order!= null && order.Items!= null)
        {
            return order.Items.Count > 0;
        }
        return false;
    }
}