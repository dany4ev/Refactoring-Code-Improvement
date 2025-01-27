namespace DefaultNamespace;

public class SimplifyConditionalExpression
{
    public bool IsValid(Order order)
    {
        if (order!= null && order.Items!= null && order.Items.Count > 0)
        {
            return true;
        }
        return false;
    }
}