import type { Role } from "./roles";

export function isSuperAdmin(role: Role | undefined): boolean {
  return role === "superAdmin";
}

export function isAdmin(role: Role | undefined): boolean {
  return role === "admin" || role === "superAdmin";
}

export function canManageUsers(role: Role | undefined): boolean {
  return isAdmin(role);
}

export function canUpdateUser(actorRole: Role | undefined, actorId: string, targetUserId: string): boolean {
  if (isAdmin(actorRole)) return true;
  return actorId === targetUserId;
}


