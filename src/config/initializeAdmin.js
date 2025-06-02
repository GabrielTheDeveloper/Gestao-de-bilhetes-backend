const User = require('../models/User');

async function initializeAdmin() {
  const adminExists = await User.findOne({ email: 'admin@bilhete.com' });
  if (!adminExists) {
    const admin = new User({
      id: ADMIN_ID,
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      role: 'admin',
      city: ADMIN_CITY,
      password: ADMIN_PASSWORD,
      isActive: true,
    });
    await admin.save();
    console.log('Admin user initialized.');
  }
}

module.exports = initializeAdmin;