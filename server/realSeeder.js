const { image } = require("faker");
const faker = require("faker");
const models = require("./models/index");

const users = [...Array(10)].map((user) => ({
  name: faker.name.firstName() + " " + faker.name.lastName(),
  email: faker.internet.exampleEmail(),
  password: faker.datatype.number({
    min: 10000,
    max: 99999,
  }),
  profileImg: image.avatar(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

users.forEach((user) => {
  // console.log(user)
  async function createUser() {
    try {
      const newUser = await models.user.create(user);
      await newUser.save();
      await models.friend.create({
        userId: 1,
        friendUserId: newUser.id,
        friendName: newUser.name,
        messageId: faker.datatype.uuid(),
        status: 1,
      });
    } catch (err) {
      console.log(err);
    }
  }

  createUser();
});
