import { Protobuf } from "@meshtastic/core";
import { z } from "zod/v4";

const GpsModeEnum = z.enum(Protobuf.Config.Config_PositionConfig_GpsMode);

export const PositionValidationSchema = z.object({
  positionBroadcastSecs: z.coerce.number().int().min(0),
  positionBroadcastSmartEnabled: z.boolean(),
  fixedPosition: z.boolean(),
  latitude: z.coerce.number().gte(-90).lte(90),
  longitude: z.coerce.number().gte(-180).lte(180),
  altitude: z.coerce.number().int().min(0),
  gpsUpdateInterval: z.coerce.number().int().min(0),
  positionFlags: z.coerce.number().int().min(0),
  rxGpio: z.coerce.number().int().min(0),
  txGpio: z.coerce.number().int().min(0),
  broadcastSmartMinimumDistance: z.coerce.number().int().min(0),
  broadcastSmartMinimumIntervalSecs: z.coerce.number().int().min(0),
  gpsEnGpio: z.coerce.number().int().min(0),
  gpsMode: GpsModeEnum,
});

export type PositionValidation = z.infer<typeof PositionValidationSchema>;
