import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findOne({ where: id });

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found!' });
    }

    const result = await recipient.update(req.body);
    return res.json(result);
  }
}

export default new RecipientController();
