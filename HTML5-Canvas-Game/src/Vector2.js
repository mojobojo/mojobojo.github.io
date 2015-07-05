
// No operator overloading?? Gah
var Vector2 = function(XVal, YVal)
{
    this.X = XVal;
    this.Y = YVal;
}

function
Vector2_Add(A, B)
{
    var ReturnValue = new Vector2(0.0, 0.0);

    ReturnValue.X = A.X + B.X;
    ReturnValue.Y = A.Y + B.Y;

    return ReturnValue;
}

function
Vector2_Subtract(A, B)
{
    var ReturnValue = new Vector2(0.0, 0.0);

    ReturnValue.X = A.X - B.X;
    ReturnValue.Y = A.Y - B.Y;

    return ReturnValue;
}

function
Vector2_MultiplyByScalar(A, B)
{
    var ReturnValue = new Vector2(0.0, 0.0);

    ReturnValue.X = A.X * B;
    ReturnValue.Y = A.Y * B;

    return ReturnValue;
}

function
Vector2_Length(A)
{
    return Math.sqrt(A.X * A.X + A.Y * A.Y);
}

function
Vector2_Normalize(A)
{
    var RetVal = new Vector2(0.0, 0.0);
    var Len = Vector2_Length(A);
    
    if  (Len == 0.0)
    {
        return RetVal;
    }

    RetVal.X = A.X / Len;
    RetVal.Y = A.Y / Len;

    return RetVal;
}

function
Vector2_UnaryMinus(A)
{
    var ReturnValue = new Vector2(0.0, 0.0);
    ReturnValue.X = -A.X;
    ReturnValue.Y = -A.Y;
    return ReturnValue;
}

function
Vector2_Distance(A, B)
{
    return Vector2_Length(Vector2_Subtract(A, B));
}
