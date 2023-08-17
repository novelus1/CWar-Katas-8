function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error("Invalid params");
  }

  const wiggle = candidate.minSalary * 0.1;
  const waggledSalary = candidate.minSalary - wiggle;

  if (waggledSalary <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}
