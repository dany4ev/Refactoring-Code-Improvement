namespace DefaultNamespace;

public class SimplifyConditionalExpressionRefactored
{
    public bool IsValid(Order order)
    {
        return order!= null && order.Items?.Any() == true;
    }
}