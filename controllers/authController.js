import { User } from "../model/User.js";



export const register = async (req, res) => {
  try {
    const {name, email, password, role } = req.body;
    const user = {email,password,role,name}
    const newUser = await User.create(user)
    res.json({msg:"User Created Sucessfully",newUser})
  } catch (error) {
    res.json({error})
  }
};

export const login = (req, res) => {
  const { email, password, role } = req.body;
  const user = { email, password, role };
  res.json({ msg: "Login Sucessfully", user });
};
