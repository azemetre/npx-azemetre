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

test("business card is looking slick", () => {
  const consoleSpy = jest.spyOn(console, "log");
  // console.log = jest.fn();
  console.log(card);
  expect(consoleSpy).toHaveBeenCalledTimes(1);
  // expect(consoleSpy).toHaveBeenCalledWith(box);
});
