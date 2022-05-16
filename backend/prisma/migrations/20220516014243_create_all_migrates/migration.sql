-- CreateTable
CREATE TABLE "users" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "deposit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "deposit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "pix" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "pix_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "transfer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    CONSTRAINT "transfer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transfer_key_fkey" FOREIGN KEY ("key") REFERENCES "pix" ("key") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "deposit_id_key" ON "deposit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pix_key_key" ON "pix"("key");
