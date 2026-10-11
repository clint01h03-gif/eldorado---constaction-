/**
 * ELDORADO Construction ERP - Seed Script
 * Run with: npm run db:seed
 *
 * This seeds demonstration data only. Clearly labeled as demo.
 * Requires DATABASE_URL and that the schema has been applied.
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding ELDORADO demo data...");

  // Roles
  const roles = [
    { code: "SUPER_ADMIN", name: "Super Administrator", isSystem: true },
    { code: "DIRECTOR", name: "Company Director", isSystem: true },
    { code: "PROJECT_MANAGER", name: "Project Manager", isSystem: true },
    { code: "SITE_ENGINEER", name: "Site Engineer", isSystem: true },
    { code: "STOREKEEPER", name: "Storekeeper", isSystem: true },
    { code: "PROCUREMENT", name: "Procurement Officer", isSystem: true },
    { code: "ACCOUNTANT", name: "Accountant", isSystem: true },
    { code: "HR_MANAGER", name: "HR Manager", isSystem: true },
  ];

  for (const r of roles) {
    await prisma.role.upsert({
      where: { code: r.code },
      update: {},
      create: r,
    });
  }
  console.log("✓ Roles");

  // Demo admin user (password: Eldorado@2026)
  const passwordHash = await bcrypt.hash("Eldorado@2026", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@eldorado.lk" },
    update: {},
    create: {
      email: "admin@eldorado.lk",
      passwordHash,
      firstName: "System",
      lastName: "Administrator",
      isActive: true,
    },
  });

  const superAdminRole = await prisma.role.findUnique({ where: { code: "SUPER_ADMIN" } });
  if (superAdminRole) {
    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: admin.id, roleId: superAdminRole.id } },
      update: {},
      create: { userId: admin.id, roleId: superAdminRole.id },
    });
  }
  console.log("✓ Admin user (admin@eldorado.lk / Eldorado@2026)");

  // Material categories
  const categories = [
    { code: "CEMENT", name: "Cement" },
    { code: "SAND", name: "Sand & Aggregate" },
    { code: "STEEL", name: "Reinforcement Steel" },
    { code: "BRICK", name: "Bricks & Blocks" },
    { code: "TIMBER", name: "Timber & Formwork" },
    { code: "PLUMBING", name: "Pipes & Plumbing" },
    { code: "ELECTRICAL", name: "Electrical Materials" },
    { code: "PAINT", name: "Paint & Finishing" },
    { code: "FASTENER", name: "Fasteners & Tools" },
    { code: "OTHER", name: "Other Supplies" },
  ];

  for (const c of categories) {
    await prisma.materialCategory.upsert({
      where: { code: c.code },
      update: {},
      create: c,
    });
  }
  console.log("✓ Material categories");

  // Sample materials
  const cementCat = await prisma.materialCategory.findUnique({ where: { code: "CEMENT" } });
  const steelCat = await prisma.materialCategory.findUnique({ where: { code: "STEEL" } });

  if (cementCat) {
    await prisma.material.upsert({
      where: { sku: "CEM-OPC-50" },
      update: {},
      create: {
        sku: "CEM-OPC-50",
        name: "OPC Cement 50kg",
        specification: "Ordinary Portland Cement, 50 kg bag",
        categoryId: cementCat.id,
        baseUnit: "bags",
        minStockLevel: 100,
        reorderLevel: 200,
        currentUnitCost: 1850,
      },
    });
  }

  if (steelCat) {
    await prisma.material.upsert({
      where: { sku: "STL-TMT-12" },
      update: {},
      create: {
        sku: "STL-TMT-12",
        name: "TMT Bar 12mm",
        specification: "TMT Reinforcement Bar 12 mm",
        categoryId: steelCat.id,
        baseUnit: "kg",
        minStockLevel: 500,
        reorderLevel: 1000,
        currentUnitCost: 285,
      },
    });
  }
  console.log("✓ Sample materials");

  // Warehouse
  await prisma.warehouse.upsert({
    where: { code: "WH-MAIN" },
    update: {},
    create: {
      code: "WH-MAIN",
      name: "Main Warehouse - Colombo",
      address: "Industrial Zone, Colombo",
      isActive: true,
    },
  });
  console.log("✓ Warehouse");

  // Demo project
  await prisma.project.upsert({
    where: { code: "ELD-2026-001" },
    update: {},
    create: {
      code: "ELD-2026-001",
      name: "Demo Residential Complex - Phase 1",
      description: "Demonstration project for ELDORADO ERP (sample data)",
      category: "Residential",
      clientName: "Demo Client Ltd",
      siteAddress: "Nugegoda, Colombo",
      status: "ACTIVE",
      percentComplete: 35,
      contractValue: 125000000,
      approvedBudget: 118000000,
      startDate: new Date("2026-01-15"),
      expectedEndDate: new Date("2027-06-30"),
      createdById: admin.id,
    },
  });
  console.log("✓ Demo project");

  console.log("\n✅ Seed completed. Login: admin@eldorado.lk / Eldorado@2026");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
