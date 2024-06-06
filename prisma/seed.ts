import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();



const main = async () => {
  
  const ayush = await prisma.user.create({
    data: {
      name: "Ayush Mehta",
      email: "ayush@gmail.com",
      password: await bcrypt.hash("Ayush@123", 10),
      role: "1",
    },
  });

  const bharat = await prisma.user.create({
    data: {
      name: "Bharat Makwana",
      email: "bharat@gmail.com",
      password: await bcrypt.hash("Bharat@123", 10),
      role: "1",
    },
  });

  const rashesh = await prisma.user.create({
    data: {
      name: "Rashesh Pithadiya",
      email: "rashesh@gmail.com",
      password: await bcrypt.hash("Rashesh@123", 10),
      role: "1",
    },
  });

  await prisma.user.create({
    data: {
      name: "User1",
    email: "user1@gmail.com",
    password: await bcrypt.hash("User1@123", 10),
    role: "0",
    },
  });

  await prisma.user.create({
    data: {
      name: "User2",
    email: "user2@gmail.com",
    password: await bcrypt.hash("User2@123", 10),
    role: "0",
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage1",
      contact: "1111111111",
      email: "garage1@gmail.com",
      thumbnail: "garageImages/image1.jpg",
      open_time: "08:00 AM",
      close_time: "06:00 PM",
      description: "A shelter or repair shop for automotive vehicles.",
      status: true,
      latitude: 46.72301,
      longitude: 64.86966,
      owner_id: rashesh.id,
      users: {
        connect: { id: rashesh.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage2",
      contact: "2222222222",
      email: "garage2@gmail.com",
      thumbnail: "garageImages/image2.jpg",
      open_time: "09:00 AM",
      close_time: "07:00 PM",
      description:
        "A cabinet with a vertical rolling door for small kitchen appliances.",
      status: false,
      latitude: 70.63194,
      longitude: 88.63654,
      owner_id: rashesh.id,
      users: {
        connect: { id: rashesh.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage3",
      contact: "3333333333",
      email: "garage3@gmail.com",
      thumbnail: "garageImages/image3.jpg",
      open_time: "07:30 AM",
      close_time: "05:30 PM",
      description: "A repair shop specializing in luxury vehicles.",
      status: true,
      latitude: 55.05482,
      longitude: -78.02967,
      owner_id: ayush.id,
      users: {
        connect: { id: ayush.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage4",
      contact: "4444444444",
      email: "garage4@gmail.com",
      thumbnail: "garageImages/image4.jpg",
      open_time: "10:00 AM",
      close_time: "08:00 PM",
      description: "Automotive repair and maintenance services.",
      status: false,
      latitude: 31.29017,
      longitude: 103.40267,
      owner_id: ayush.id,
      users: {
        connect: { id: ayush.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage5",
      contact: "5555555555",
      email: "garage5@gmail.com",
      thumbnail: "garageImages/image5.jpg",
      open_time: "08:30 AM",
      close_time: "06:30 PM",
      description: "Specialized in electric vehicle repairs.",
      status: true,
      latitude: -2.67097,
      longitude: -46.7604,
      owner_id: ayush.id,
      users: {
        connect: { id: ayush.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage6",
      contact: "6666666666",
      email: "garage6@gmail.com",
      thumbnail: "garageImages/image6.jpg",
      open_time: "09:30 AM",
      close_time: "07:30 PM",
      description: "Offering 24/7 roadside assistance.",
      status: false,
      latitude: 4.55515,
      longitude: -66.23955,
      owner_id: ayush.id,
      users: {
        connect: { id: ayush.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage7",
      contact: "7777777777",
      email: "garage7@gmail.com",
      thumbnail: "garageImages/image7.jpg",
      open_time: "07:00 AM",
      close_time: "05:00 PM",
      description: "Specialized in vintage car restorations.",
      status: true,
      latitude: 71.25508,
      longitude: 83.27735,
      owner_id: bharat.id,
      users: {
        connect: { id: bharat.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage8",
      contact: "8888888888",
      email: "garage8@gmail.com",
      thumbnail: "garageImages/image8.jpg",
      open_time: "10:30 AM",
      close_time: "08:30 PM",
      description: "Complete automotive diagnostics and repairs.",
      status: false,
      latitude: 59.63731,
      longitude: 71.80599,
      owner_id: bharat.id,
      users: {
        connect: { id: bharat.id },
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage9",
      contact: "9999999999",
      email: "garage9@gmail.com",
      thumbnail: "garageImages/image9.jpg",
      open_time: "08:00 AM",
      close_time: "06:00 PM",
      description: "Advanced automotive technology services.",
      status: true,
      latitude: 60.81236,
      longitude: 141.60922,
      owner_id: bharat.id,
      users: {
        connect: [{ id: bharat.id } , { id: ayush.id } ,{ id: rashesh.id }  ],
      },
    },
  });

  await prisma.garageMaster.create({
    data: {
      name: "garage10",
    contact: "1010101010",
    email: "garage10@gmail.com",
    thumbnail: "garageImages/image10.jpg",
    open_time: "09:00 AM",
    close_time: "07:00 PM",
    description: "High-performance tuning and upgrades.",
    status: false,
    latitude: 2.97905,
    longitude: 35.56457,
      owner_id: bharat.id,
      users: {
        connect: [{ id: bharat.id } , { id: ayush.id }],
      },
    },
  });
};

main()
  .catch((e: Error): void => console.log(e))
  .finally((): void => {
    prisma.$disconnect();
  });
