"use client";
import { useState } from "react";

import {
	LoginFormConfigType,
	SignupFormConfigType,
} from "@/constants/forms/users";

import { getFormConfig } from "@/constants/forms";
import { SwitchFormActionType } from "@/constants/forms";

import PrimaryButton from "@/components/buttons/primaryButton";
import FieldsContainer from "@/components/helpers/form/container";

import APIrequest from "@/utils/requests";

export default function ConfigBasedForm({
	currentformType,
	formPreFillData = {},
}) {
	const [currentForm, setCurrentForm] = useState(
		currentformType || LoginFormConfigType
	);
	const [currentFormConfig, setCurrentFormConfig] = useState(
		getFormConfig(currentformType || currentForm || LoginFormConfigType)
	);
	const [formState, setFormState] = useState(formPreFillData || {});
	const [formErrors, setFormErrors] = useState({});
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			let currentErrors = {};
			for (let { required, id, errorMessage } of currentFormConfig?.fields ||
				[]) {
				if (required && !formState[id]) {
					currentErrors[id] = errorMessage;
				}
			}

			if (currentErrors && Object.keys(currentErrors).length > 0) {
				const error = new Error("Validations failed");
				error.details = currentErrors;
				throw error;
			}

			delete formState["confirmPassword"];
			const response = await APIrequest({
				api: currentFormConfig?.submitApi,
				method: "post",
				data: formState,
			});

			if (response?.success && currentFormConfig?.onSuccess) {
				currentFormConfig?.onSuccess();
			}
		} catch (err) {
			console.error("Error during form submission:", err);
			setFormErrors(
				err.details || { common: "Something went wrong! Please try again" }
			);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="md:bg-transparent rounded-2xl flex flex-col gap-4">
			<div className="flex flex-col gap-1">
				{currentFormConfig?.title ? (
					<h2 className="text-[40px]">{currentFormConfig?.title}</h2>
				) : null}
				{currentFormConfig?.description ? (
					<p className="text-md text-secondary">
						{currentFormConfig?.description}
					</p>
				) : null}
			</div>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<FieldsContainer
					formErrors={formErrors}
					formData={formState}
					formDataSetter={setFormState}
					formErrorSetter={setFormErrors}
					config={currentFormConfig?.fields}
				/>
				{currentForm == LoginFormConfigType ? (
					<div className="flex justify-between">
						<div className="flex gap-2">
							<input type="checkbox" />
							<label>Remember me</label>
						</div>
						<p>Forgot Password</p>
					</div>
				) : currentForm == SignupFormConfigType ? (
					<div className="flex gap-2">
						<input type="checkbox" />
						<label>Agree to Terms of Service and Privacy Policy</label>
					</div>
				) : null}
				<div className="flex flex-col gap-1">
					<PrimaryButton
						title={
							loading
								? currentFormConfig?.submitLoadingTitle
								: currentFormConfig?.submitTitle
						}
						type="submit"
						disabled={loading}
						clickEvent={handleSubmit}
						buttonType={currentFormConfig?.buttonType || "primary"}
					/>
					{formErrors?.common && (
						<p className="text-red-800 text-sm">{formErrors?.common}</p>
					)}
				</div>
				{currentFormConfig?.formHelpers ? (
					<div className="flex gap-1 text-sm">
						<span className="text-gray-900">
							{currentFormConfig?.formHelpers?.title}
						</span>
						<span
							className="cursor-pointer font-[600]"
							onClick={() => {
								if (
									currentFormConfig?.formHelpers?.action?.type ===
									SwitchFormActionType
								) {
									setCurrentForm(
										currentFormConfig?.formHelpers?.action?.to || ""
									);
									setCurrentFormConfig(
										getFormConfig(
											currentFormConfig?.formHelpers?.action?.to || ""
										)
									);
								}
							}}
						>
							{currentFormConfig?.formHelpers?.subtitle}
						</span>
					</div>
				) : null}
			</form>
		</div>
	);
}
