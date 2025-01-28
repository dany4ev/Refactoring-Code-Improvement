namespace DefaultNamespace;

public class UseNull_ConditionalOperatorRefactored
{
    public bool IsValid(Order order)
    {
        return order?.Items?.Count > 0;
    }
}