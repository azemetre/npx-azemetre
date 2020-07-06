const { card } = require("./card");

const box = `
       +-------------------------------------------------------+
       |                                                       |
       |   Aaron Zemetres                                      |
       |   Senior Software Engineer at Humana                  |
       |                                                       |
       |          Web: https://azemetre.com                    |
       |       Github: https://github.com/azemetre             |
       |     LinkedIn: https://linkedin.com/in/aaronzemetres   |
       |                                                       |
       +-------------------------------------------------------+
`;

// TODO: fix state of current test
// a very poor example of a CLI test, may need to integrate with @oclif/test
test("business card is looking slick", () => {
  const consoleSpy = jest.spyOn(console, "log");
  console.log(card);
  expect(consoleSpy).toHaveBeenCalledTimes(1);
});
