import * as Yup from 'yup';

import Courier from '../models/Courier';

class CourierController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation fails' });
    }

    const courier = await Courier.create({
      name: req.body.name,
      email: req.body.email,
    });

    return res.json(res.json(courier));
  }
}

export default new CourierController();
