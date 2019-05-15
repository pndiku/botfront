#!/bin/bash
npm install wait-on
npx wait-on http://botfront:3000 && npx cypress run