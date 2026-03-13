# Algorithm

List of challenges:
- [Top Interview Questions - Easy](https://leetcode.com/explore/interview/card/top-interview-questions-easy/)

I'll try to find solutions by myself without AI and study around the proposed 
solutions by other developers. The goal is to improve my algorithm solving skills,
focusing on performance and maintanability.

The challenges will be mostly done on TypeScript/JavaScript because I wanna
practice it on my most used language, although this could change in the future - 
I can already see JavaScript lacking viable Data Structure options for harder
challenges.

## 📁 Directory Structure Per Challenge

Each challenge now follows this pattern:

```
easy/array/[number]-[problem-name]/
├── solution.ts                 # Official/optimal solution only
├── alternative-solutions.ts    # Previous approaches with descriptive names
└── solution.test.ts           # Jest tests covering both
```

## 🏆 Naming Convention for Multiple Functions

In `alternative-solutions.ts`, functions are named to describe their approach:

| Name | Meaning |
|------|---------|
| `bruteForce` | O(n²) nested loop approach |
| `hashMap` | Using HashMap/Set for O(n) |
| `personalBruteForce` | Your initial attempt |
| `xor` | Bit manipulation approach |

Example structure:
```typescript
// solution.ts - THE OPTIMAL ONE
export function solution(nums: number[]): number { ... }

// alternative-solutions.ts - EXPLORATIONS
export function bruteForce(nums: number[]): number { ... }
export function hashMap(nums: number[]): number { ... }
```

## 🚀 Available Commands

```bash
npm test              # Run all tests
npm test -- --watch  # Watch mode (re-run on file changes)
npm test -- --coverage  # See test coverage report
```