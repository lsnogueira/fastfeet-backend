import * as Yup from 'yup';

import Courier from '../models/Courier';

class CourierController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation fails' });
    }

    const userExists = await Courier.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const courier = await Courier.create({
      name: req.body.name,
      email: req.body.email,
    });
    const { id, name, email } = courier;
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new CourierController();
