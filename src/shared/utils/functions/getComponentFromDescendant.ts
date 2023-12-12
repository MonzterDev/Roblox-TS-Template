import { BaseComponent, Components } from "@flamework/components";
import { Dependency, Modding } from "@flamework/core";

// This can be used to get a Flamework component from a descendant of an instance.

/** @metadata macro */
export function getComponentFromDescendant<T extends BaseComponent>(
	instance: Instance,
	specifier?: Modding.Generic<T, "id">,
): T | undefined {
	assert(specifier, "Specifier is required");

	const components = Dependency(Components);

	const component = components.getComponent<T>(instance, specifier.id);
	if (component) return component;

	if (instance.Parent) return getComponentFromDescendant(instance.Parent, specifier);
}
