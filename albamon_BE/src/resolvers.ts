import { User, Gender } from "./types.js";

// 임시 데이터 저장소
let users: User[] = [
  {
    id: "1",
    name: "이로움",
    birthDate: "1990-01-01",
    gender: Gender.FEMALE,
    occupation: "개발자",
  },
  {
    id: "2",
    name: "이영현",
    birthDate: "1995-11-05",
    gender: Gender.FEMALE,
    occupation: "디자이너",
  },
  {
    id: "3",
    name: "김규리",
    birthDate: "1996-01-12",
    gender: Gender.FEMALE,
    occupation: "디자이너",
  },
];

export const resolvers = {
  Query: {
    users: () => users,
    user: (_: any, { id }: { id: string }) =>
      users.find((user) => user.id === id),
  },
  Mutation: {
    createUser: (
      _: any,
      { name, birthDate, gender, occupation }: Omit<User, "id">
    ) => {
      const newUser: User = {
        id: String(users.length + 1),
        name,
        birthDate,
        gender,
        occupation,
      };
      users.push(newUser);
      return newUser;
    },
  },
};
