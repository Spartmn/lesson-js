describe("pow", function() {

    /*it("возводит в n-ю степень", function() {
        assert.equal(pow(2, 3), 8);
    });
    it("при возведении 3 в 4ю степень равен 81", function() {
        assert.equal(pow(3, 4), 81);
    });*/
    describe("возводит x в степень n", function() {
        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });
    it("при возведении в отрицательную степень результат NaN", function() {
        assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function() {
        assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
    });
    describe("Тест", function() {

        before(function() { alert("Начало тестов"); });
        after(function() { alert("Конец тестов"); });

        beforeEach(function() { alert("Вход в тест"); });
        afterEach(function() { alert("Выход из теста"); });

        it('тест 1', function() { alert('1'); });
        it('тест 2', function() { alert('2'); });

    });
});