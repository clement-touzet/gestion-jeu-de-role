// import React from "react";

// type Props = {
//   selectedWeapon: WeaponType["name"];
//   handleChangeSelectedRace: (value: RaceType["name"]) => void;
//   races: RaceType[];
// };

// const WeaponSelect = ({selectedRace,
//   handleChangeSelectedRace,
//   races,}: Props) => {
//   return (
//     <Select value={selectedRace} onValueChange={handleChangeSelectedRace}>
//       <SelectTrigger className="w-[220px]">
//         <SelectValue placeholder="Sélectionner une race" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Race</SelectLabel>

//           {races.map((currentRace) => {
//             return (
//               <SelectItem key={currentRace.id} value={currentRace.id}>
//                 {currentRace.name}
//               </SelectItem>
//             );
//           })}
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   )
// }

// export default WeaponSelect
