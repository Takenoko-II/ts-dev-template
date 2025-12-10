import { MinecraftDimensionTypes } from "@minecraft/vanilla-data";
import { world } from "@minecraft/server";

import { sentry, TypeModel } from "@typesentry";

import { TripleAxisRotationBuilder, Vector3Builder } from "@utils/Vector";

world.getDimension(MinecraftDimensionTypes.Overworld);

const strArr: TypeModel<string[]> = sentry.arrayOf(sentry.string);

TripleAxisRotationBuilder.from(Vector3Builder.zero().getRotation2f()).getObjectCoordsSystem().left().getDirection3d();

strArr.cast(["a"]);
