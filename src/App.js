import React, { useState } from "react";
import { useImmer } from "use-immer";
import { Input, Text } from "@chakra-ui/react";

function App(props) {
  const [person, setPerson] = useState({ name: "son", city: "seoul" });
  const [user, updateUser] = useImmer({ name: "lee", city: "busan" });

  function hadleNameChange(e) {
    const newPerson = { ...person };
    newPerson.name = e.target.value;
    setPerson(newPerson);
  }

  function hadleCityChange(e) {
    const newPerson = { ...person };
    newPerson.city = e.target.value;
    setPerson(newPerson);
  }

  function hadleUserNameChange(e) {
    updateUser((draft) => {
      // 리턴 x
      draft.name = e.target.value;
    });
  }

  function hadleUserCityChange(e) {
    updateUser((draft) => {
      draft.city = e.target.value;
    });
  }

  return (
    <div>
      <Input value={person.name} onChange={hadleNameChange} />
      <Input value={person.city} onChange={hadleCityChange} />
      <Text>
        {person.name} = {person.city} 거주
      </Text>

      <hr />

      <Input value={user.name} onChange={hadleUserNameChange} />
      <Input value={user.city} onChange={hadleUserCityChange} />
      <Text>
        {user.name} = {user.city} 거주
      </Text>
    </div>
  );
}

export default App;
