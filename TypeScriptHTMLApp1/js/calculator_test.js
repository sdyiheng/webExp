test("verifies that calculator can add", function () {
    equal(calculate(1, 1, "+"), 2);
});

test("verifies that calculator can substract", function () {
    equal(calculate(1, 1, "-"), 0);
});

test("verifies that calculator can multiply", function () {
    equal(calculate(1, 1, "*"), 1);
});

test("verifies that calculator can divide", function () {
    equal(calculate(1, 1, "/"), 1);
});

test("verifies that calculator can handle divide by zero error", function () {
    var result = calculate(1, 0, "/");
    equal(result, "error");
    equal($('#validation').text(), 'Attempt to divide by zero');
});

test("verifies that calculator can handle invalid number in first argument", function () {
    calculate("invalid input", 1, "+");
    equal($('#validation').text(), "Invalid input (invalid input)");
});

test("verifies that calculator can handle invalid number in second argument", function () {
    calculate(1, "invalid input", "+");
    equal($('#validation').text(), "Invalid input (invalid input)");
});

test("verifies that calculator can handle empty inputs in first argument", function () {
    calculate("", 1, "+");
    equal($('#validation').text(), "Blank input found");
});

test("verifies that calculator can handle empty inputs in second argument", function () {
    calculate(1, "", "+");
    equal($('#validation').text(), "Blank input found");
});

test("verifies that calculator can handle invalid operator", function () {
    calculate(1, 1, ":)");
    equal($('#validation').text(), "un-supported operation");
});

test("verifies that calculator can handle blank operator", function () {
    var result = calculate(1, 1, "");
    equal(result, "error");
    equal($('#validation').text(), "un-supported operation");
});

test("verifies that calculator can handle invalid operators", function () {
    var result = calculate(1, 1, ":)");
    equal(result, "error");
    equal($('#validation').text(), "un-supported operation");
});