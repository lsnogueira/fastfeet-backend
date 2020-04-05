import * as Yup from 'yup';

import Courier from '../models/Courier';

class CourierController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number().notRequired(),
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

  async index(req, res) {
    const { id } = req.params;

    const courier = await Courier.findByPk(id);

    if (!courier) {
      return res.status(400).json({ message: 'Delivery Man not found' });
    }

    return res.json(courier);
  }
}

export default new CourierController();
