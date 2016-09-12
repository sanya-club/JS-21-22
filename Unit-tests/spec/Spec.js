describe("home-work 1-2 testing", function () {

  describe("pow cases", function () {


    for (var i = 0; i < 10; i++) {

      it("pow( 1, " + i + " )", function () {
        expect(pow(1, i)).toBe(1);
      });

      it("pow( " + i + " , 1 )", function () {
        expect(pow(i, 1)).toBe(i);
      });
    }
    it("pow( 3 , 3)", function () {
      expect(pow(3, 3)).toBe(27);
    });

    it("pow( 0 , 0)", function () {
      expect(pow(0, 0)).toBe(0);
    });

  });

});